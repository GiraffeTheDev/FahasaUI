import React from "react";
import Button from "../../../components/button/Button";
import Loading from "../../../components/loading/Loading";

const ManageStock = () => {
  return (
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
          {errors?.name ? (
            <p className="text-sm text-red-500">{errors?.name?.message}</p>
          ) : (
            ""
          )}
        </FormGroup>
        <Button
          type="submit"
          kind="primary"
          disabled={isSubmitting}
          className={`${isSubmitting ? "opacity-[0.5]" : ""}`}
        >
          {isSubmitting ? <Loading></Loading> : "Cập nhật số lượng sách"}
        </Button>
      </form>
    </div>
  );
};

export default ManageStock;
