import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAllAuthor } from "../../../api/author";
import { getAllCategory } from "../../../api/category";
import { getAllGenres } from "../../../api/genres";
import { create } from "../../../api/product";
import { getAllPublisher } from "../../../api/publisher";
import { getAllSupplier } from "../../../api/supplier";
import Button from "../../../components/button/Button";
import GapRow from "../../../components/common/GapRow";
import DropDown from "../../../components/dropdown/DropDown";
import List from "../../../components/dropdown/List";
import Options from "../../../components/dropdown/Options";
import Select from "../../../components/dropdown/Select";
import FormGroup from "../../../components/form/FormGroup";
import FormRow from "../../../components/form/FormRow";
import ImageUpload from "../../../components/image/ImageUpload";
import Input from "../../../components/input/Input";
import { Label } from "../../../components/label";
import Toggle from "../../../components/toggle/Toggle";
import { useImageUpload } from "../../../hooks/useImageUpload";
const BookAddNew = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    mode: "onChange",
  });
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [author, setAuthor] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [selectPublisher, setSelectPublisher] = useState("");
  const [selectAu, setSelectAu] = useState("");
  const [selectSu, setSelectSu] = useState("");
  const [selectGen, setSelectGen] = useState("");
  const [selectCate, setSelectCate] = useState("");
  const { handleSelectImage, image } = useImageUpload(setValue);
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const handleAddBook = async (value) => {
    try {
      const response = await create(value);

      if (!response.data.error) {
        Swal.fire({
          title: "Thêm mới thành công",
          icon: "success",
        });
        navigate("/manage/book");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const watchSale = watch("sale");
  useEffect(() => {
    const fetch = async () => {
      const cate = await getAllCategory();
      setCategories(cate.data.data);
      const supp = await getAllSupplier();
      setSuppliers(supp.data.data);
      const genress = await getAllGenres();
      setGenres(genress.data.data);
      const authors = await getAllAuthor();
      setAuthor(authors.data.data);
      const publishers = await getAllPublisher();
      setPublisher(publishers.data.data);
    };
    fetch();
  }, []);
  const handleSelectAuthor = (item) => {
    setValue("author_id", item.id);
    setSelectAu(item.name);
  };
  const handleSelectGenres = (item) => {
    setValue("genres_id", item.id);
    setSelectGen(item.name);
  };
  const handleSelectCategory = (item) => {
    setValue("category_id", item.id);
    setSelectCate(item.name);
  };
  const handleSelectSupplier = (item) => {
    setValue("supplier_id", item.id);
    setSelectSu(item.name);
  };
  const handleSelectPublisher = (item) => {
    setValue("publisher_id", item.id);
    setSelectSu(item.name);
  };
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm danh mục
        </h2>
        <form onSubmit={handleSubmit(handleAddBook)}>
          <FormGroup>
            <Label htmlFor="name">Tên sách</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên sách"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh bìa sách</Label>
            <ImageUpload onChange={handleSelectImage} url={image}></ImageUpload>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="price">Giá</Label>
            <Input
              name="price"
              control={control}
              placeholder="Nhập vào giá"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="price">Giảm giá</Label>
            <Input
              name="discount"
              control={control}
              placeholder="Nhập vào phần trăm giả giá : VD : 30%"
            ></Input>
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label htmlFor="page">Số trang</Label>
              <Input
                name="page"
                control={control}
                placeholder="Nhập vào số trang"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="chapter">Nhập vào số chương</Label>
              <Input
                name="chapter"
                control={control}
                placeholder="Nhập vào số chương"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="sale">Giảm giá</Label>
              <Toggle
                on={watchSale}
                name="sale"
                control={control}
                onClick={() => setValue("sale", !watchSale)}
              ></Toggle>
            </FormGroup>
          </FormRow>
          <FormRow>
            <div className="basis-1/2">
              <FormGroup>
                <Label htmlFor="category">Danh mục</Label>
                <DropDown>
                  <Select
                    placeholder={`${selectCate ? selectCate : "Category"}`}
                  ></Select>
                  <List>
                    {categories.length > 0 &&
                      categories.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectCategory(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </FormGroup>
            </div>
            <div className="basis-1/2">
              <FormGroup>
                <Label htmlFor="author">Tác giả</Label>
                <DropDown>
                  <Select
                    placeholder={`${selectAu ? selectAu : "Author"}`}
                  ></Select>
                  <List>
                    {author.length > 0 &&
                      author.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectAuthor(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </FormGroup>
            </div>
          </FormRow>
          <FormRow>
            <div className="basis-1/2">
              <FormGroup>
                <Label htmlFor="category">Thể loại</Label>
                <DropDown>
                  <Select
                    placeholder={`${selectGen ? selectGen : "Genres"}`}
                  ></Select>
                  <List>
                    {genres.length > 0 &&
                      genres.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectGenres(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </FormGroup>
            </div>

            <div className="basis-1/2">
              <FormGroup>
                <Label htmlFor="supplier">Nhà cung cấp</Label>
                <DropDown>
                  <Select
                    placeholder={`${selectSu ? selectSu : "Supplier"}`}
                  ></Select>
                  <List>
                    {suppliers.length > 0 &&
                      suppliers.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectSupplier(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </FormGroup>
            </div>
          </FormRow>
          <GapRow></GapRow>
          <FormRow>
            <div className="w-full">
              {" "}
              <FormGroup>
                <Label htmlFor="supplier">Nhà xuất bản</Label>
                <DropDown>
                  <Select
                    placeholder={`${
                      selectPublisher ? selectPublisher : "Publisher"
                    }`}
                  ></Select>
                  <List>
                    {publisher.length > 0 &&
                      publisher.map((item) => (
                        <Options
                          key={item.id}
                          onClick={() => handleSelectPublisher(item)}
                        >
                          {item.name}
                        </Options>
                      ))}
                  </List>
                </DropDown>
              </FormGroup>
            </div>
          </FormRow>
          <FormRow>
            <div>
              <FormGroup>
                <Label htmlFor="desc">Mô tả sản phẩm</Label>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Editor
                      apiKey="1z5d3i6tpf4pjzfamiwpxolc5qk2h5h2g4lokwl4morx3agr"
                      init={{
                        plugins:
                          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                        toolbar:
                          "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                        tinycomments_mode: "embedded",
                        tinycomments_author: "Author name",
                        mergetags_list: [
                          { value: "First.Name", title: "First Name" },
                          { value: "Email", title: "Email" },
                        ],
                        ai_request: (request, respondWith) =>
                          respondWith.string(() =>
                            Promise.reject("See docs to implement AI Assistant")
                          ),
                      }}
                      initialValue="Welcome to TinyMCE!"
                      onEditorChange={(content) => field.onChange(content)}
                    />
                  )}
                />
              </FormGroup>
            </div>
          </FormRow>
          <Button type="submit" kind="primary">
            Thêm mới sách
          </Button>
        </form>
      </div>
    </>
  );
};

export default BookAddNew;
