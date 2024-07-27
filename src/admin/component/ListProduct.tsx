import { Product } from "../../interface/Product";
import Button from "@mui/material/Button";

type Props = {
  products: Product[];
  handleRemove: (id: number | string) => void;
  onAdd: () => void;
  onEdit: (product: Product) => void;
};

const ListProduct = ({ products, handleRemove, onAdd, onEdit }: Props) => {
  return (
    <div className=" mx-auto  flex flex-col gap-5">
      <Button onClick={onAdd} variant="contained" className=" w-[20%]">
        Thêm sản phẩm
      </Button>

      <div className="relative overflow-x-auto border-2 border-solid border-gray-300 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">
                  <img src={product.image} className="w-20 h-20" alt="" />
                </td>
                <td className="px-6 py-4">{product.desc}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4 flex gap-2  items-center">
                  <Button
                    onClick={() => handleRemove(product.id)}
                    variant="outlined"
                    color="error"
                  >
                    Xóa
                  </Button>
                  <Button
                    onClick={() => onEdit(product)}
                    variant="contained"
                    color="success"
                  >
                    Sửa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;