import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Image, Table } from 'antd';

import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';

interface DataType {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

const data: DataType[] = [
  {
    id: 0,
    title: 'Canon EOS M200',
    description:
      'Create limitless memories with the EOS M200 interchangeable lens camera. Equipped with a 24.1 Megapixel CMOS (APS-C) sensor, eye detection AF and enhanced dual Pixel CMOS AF, the EOS M200 makes it easy to capture high-quality images and videos, all in a compact, mirrorless design. Perfect for social media sharing, the EOS M200 boasts 4K video capability, vertical video support and built-in Wi-Fi and Bluetooth technology — helping you relive your favorite moments. Designed for ultimate creativity, the EOS M200 offers simple-to-use features that let your personality shine. Explore the camera’s creative filters to add a splash of color and special effects to your images, or use the creative assist function to easily adjust brightness and color tone.',
    price: 449,
    img: 'https://m.media-amazon.com/images/I/41qR0iIp81L._AC_.jpg',
  },
  {
    id: 1,
    title: 'AirPods Pro',
    description:
      'Portable design and stylish with a carabiner & Wrist Straps Hand Lanyard for easy carrying.You can quickly and easily attach it to a bag, backpack, or keychain, And thanks to the high quality material,the case is light to carry without burden and can also be used as a decoration.',
    price: 12.5,
    img: 'https://m.media-amazon.com/images/I/71HBEGDq7XL._AC_SX679_.jpg',
  },
  {
    id: 2,
    title: 'Swim Water Shoes',
    description:
      'These kids sport water shoes with breathable and smooth fabrics with fine stretch on uppers. Like socks. kids water shoes, keep your kids feet dry, smooth neck design of aqua socks protecting your kids feet from being hurt by stone and other sharp objects. Wearable and top-quality sole, Slip-resitant sole for great protection to kid’s little feet. These kids aqua water shoes with a dozens of funny pattern and styles, hook and loop design make it convenient to wear and take off, lightweight and compressible, easy to fold and carry when you and your kids are on travel outside.',
    price: 10.99,
    img: 'https://m.media-amazon.com/images/I/811c4gMsWeL._AC_UY575_.jpg',
  },
  {
    id: 3,
    title: 'Breville Barista Express Espresso Machine',
    description:
      'The Breville Barista Express delivers third wave specialty coffee at home using the 4 keys formula and is part of the Barista Series that offers all in one espresso machines with integrated grinder to go from beans to espresso in under one minute.',
    price: 749.95,
    img: 'https://m.media-amazon.com/images/I/71BvCt6eAFL._AC_SX569_.jpg',
  },
];

const ProductsPage = () => {
  const [addModalIsVisible, setAddModalIsVisible] = useState<boolean>(false);
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false);
  const [editItemIdx, setEditItemIdx] = useState<number>(0);

  return (
    <>
      <AddProductModal
        open={addModalIsVisible}
        setOpen={setAddModalIsVisible}
      />
      <EditProductModal
        open={editModalIsVisible}
        setOpen={setEditModalIsVisible}
        item={data[editItemIdx]}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 24,
        }}
      >
        <Button
          size="large"
          style={{ margin: 0 }}
          type="primary"
          onClick={() => {
            setAddModalIsVisible(true);
          }}
        >
          Add New Product
        </Button>
      </div>
      <Table dataSource={data}>
        <Table.Column
          title="ID"
          dataIndex="id"
          key="id"
          align="center"
          width={75}
        />
        <Table.Column
          title="Title"
          dataIndex="title"
          key="title"
          ellipsis
          width={200}
        />
        <Table.Column
          title="Description"
          dataIndex="description"
          key="description"
          ellipsis
        />
        <Table.Column
          title="Picture"
          dataIndex="img"
          key="img"
          align="center"
          width={170}
          render={(val) => <Image width={150} src={val} />}
        />
        <Table.Column
          title="Price"
          dataIndex="price"
          key="price"
          align="center"
          width={100}
          render={(val) => `$${val}`}
        />
        <Table.Column
          title="Edit"
          align="center"
          width={100}
          render={(_val, _rec, idx) => (
            <Button
              onClick={() => {
                setEditItemIdx(idx);
                setEditModalIsVisible(true);
              }}
            >
              <EditOutlined />
            </Button>
          )}
        />
      </Table>
    </>
  );
};
export default ProductsPage;
