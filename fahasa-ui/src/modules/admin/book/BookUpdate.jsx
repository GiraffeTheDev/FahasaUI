import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getAllAuthor } from "../../../api/author";
import { getAllCategory } from "../../../api/category";
import { getAllGenres } from "../../../api/genres";
import { getOne, update } from "../../../api/product";
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

const BookUpdate = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm({
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
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [params] = useSearchParams();
  const id = params.get("id");
  const { handleSelectImage, image } = useImageUpload(setValue);
  const navigate = useNavigate();
  const handleUpdateBook = async (value) => {
    try {
      const response = await update(value);
      if (!response.data.error) {
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
        navigate("/manage/book");
      }
    } catch (error) {
      Swal.fire({
        title: "Cập nhật thất bại",
        icon: "error",
      });
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
      const book = await getOne(id);
      reset(book.data.data);
      setUrl(book.data.data.image);
      setSelectAu(book.data.data.Author?.name);
      setSelectCate(book.data.data.Category?.name);
      setSelectGen(book.data.data.Genres?.name);
      setSelectSu(book.data.data.Supplier?.name);
      setSelectPublisher(book.data.data.Publisher?.name);
      setDescription(book.data.data.description);
    };

    fetch();
  }, [id, reset]);

  const handleSelectAuthor = (item) => {
    setSelectAu(item.name);
    setValue("author_id", item.id);
  };
  const handleSelectGenres = (item) => {
    setSelectGen(item.name);
    setValue("genres_id", item.id);
  };
  const handleSelectCategory = (item) => {
    setSelectCate(item.name);
    setValue("category_id", item.id);
  };
  const handleSelectSupplier = (item) => {
    setSelectSu(item.name);
    setValue("supplier_id", item.id);
  };
  const handleSelectPublisher = (item) => {
    setSelectPublisher(item.name);
    setValue("publisher_id", item.id);
  };
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Sửa thông tin sách
        </h2>
        <form onSubmit={handleSubmit(handleUpdateBook)}>
          <FormGroup>
            <Label htmlFor="name">Tên sách</Label>
            <Input
              name="name"
              control={control}
              placeholder="Nhập vào tên thể loại"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Ảnh bìa sách</Label>
            <ImageUpload
              onChange={handleSelectImage}
              url={image ? image : url}
            ></ImageUpload>
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
                    placeholder={selectCate ? selectCate : "Category"}
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
                  <Select placeholder={selectAu ? selectAu : "Author"}></Select>
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
                    placeholder={selectGen ? selectGen : "Genres"}
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
                    placeholder={selectSu ? selectSu : "Supplier"}
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
          <FormRow>
            <div className="w-full">
              <FormGroup>
                <Label htmlFor="publisher">Nhà xuất bản</Label>
                <DropDown>
                  <Select
                    placeholder={
                      selectPublisher ? selectPublisher : "Publisher"
                    }
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
                <Label htmlFor="description">Mô tả sản phẩm</Label>
                <Controller
                  name="description"
                  control={control}
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
                      initialValue={
                        description ? description : "Welcome to TinyMCE!"
                      }
                      onEditorChange={(content) => field.onChange(content)}
                    />
                  )}
                />
              </FormGroup>
            </div>
          </FormRow>
          <GapRow></GapRow>
          <div className="flex items-center gap-x-5">
            <Button type="submit" kind="primary">
              Cập nhật sách
            </Button>
            <Button type="button" kind="semi" href="/manage/book">
              Quay lại
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookUpdate;
