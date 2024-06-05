import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllAuthor } from "../../../api/author";
import { getAllCategory } from "../../../api/category";
import { getAllGenres } from "../../../api/genres";
import { getOne, update } from "../../../api/product";
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
  const [url, setUrl] = useState("");
  const [params] = useSearchParams();
  const id = params.get("id");
  const { handleSelectImage, image } = useImageUpload(setValue);
  const handleUpdateBook = async (value) => {
    try {
      const response = await update(value);
      console.log(response);
      if (!response.data.error) {
        toast(response.data.message);
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
      const book = await getOne(id);
      console.log(book);
      reset(book.data.data);
      setUrl(book.data.data.image);
    };

    fetch();
  }, []);
  const handleSelectAuthor = (item) => {
    setValue("author_id", item);
  };
  const handleSelectGenres = (item) => {
    setValue("genres_id", item);
  };
  const handleSelectCategory = (item) => {
    setValue("category_id", item);
  };
  const handleSelectSupplier = (item) => {
    setValue("supplier_id", item);
  };
  return (
    <>
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thêm danh mục
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
            <FormGroup>
              <Label htmlFor="category">Danh mục</Label>
              <DropDown>
                <Select placeholder={"Category"}></Select>
                <List>
                  {categories.length > 0 &&
                    categories.map((item) => (
                      <Options
                        key={item.id}
                        onClick={() => handleSelectCategory(item.id)}
                      >
                        {item.name}
                      </Options>
                    ))}
                </List>
              </DropDown>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="author">Tác giả</Label>
              <DropDown>
                <Select placeholder={"Author"}></Select>
                <List>
                  {author.length > 0 &&
                    author.map((item) => (
                      <Options
                        key={item.id}
                        onClick={() => handleSelectAuthor(item.id)}
                      >
                        {item.name}
                      </Options>
                    ))}
                </List>
              </DropDown>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Thể loại</Label>
              <DropDown>
                <Select placeholder={"Genres"}></Select>
                <List>
                  {genres.length > 0 &&
                    genres.map((item) => (
                      <Options
                        key={item.id}
                        onClick={() => handleSelectGenres(item.id)}
                      >
                        {item.name}
                      </Options>
                    ))}
                </List>
              </DropDown>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="supplier">Nhà cung cấp</Label>
              <DropDown>
                <Select placeholder={"Supplier"}></Select>
                <List>
                  {suppliers.length > 0 &&
                    suppliers.map((item) => (
                      <Options
                        key={item.id}
                        onClick={() => handleSelectSupplier(item.id)}
                      >
                        {item.name}
                      </Options>
                    ))}
                </List>
              </DropDown>
            </FormGroup>
          </FormRow>
          <GapRow></GapRow>
          <div className="flex items-center gap-x-5">
            <Button type="submit" kind="primary">
              Cập nhật sách
            </Button>
            <Button type="button" kind="semi" href="/manage/books">
              Quay lại
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookUpdate;
