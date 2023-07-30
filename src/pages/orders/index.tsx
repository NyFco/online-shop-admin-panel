import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';

import EditOrderModal from './EditOrderModal';

interface DataType {
  purchaseId: number;
  userId: number;
  productId: number;
  productTitle: string;
  quantity: number;
  price: number;
}

const data: DataType[] = [
  {
    purchaseId: 23456,
    userId: 134896,
    productId: 123456,
    productTitle: 'some cool shirt',
    quantity: 2,
    price: 19.99,
  },
  {
    purchaseId: 49182,
    userId: 123456,
    productId: 654321,
    productTitle: 'something else you want to buy?',
    quantity: 4,
    price: 24.99,
  },
];

const OrdersPage = () => {
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false);
  const [editItemIdx, setEditItemIdx] = useState<number>(0);

  return (
    <>
      <EditOrderModal
        open={editModalIsVisible}
        setOpen={setEditModalIsVisible}
        orderData={data[editItemIdx]}
      />
      <Table dataSource={data}>
        <Table.Column
          title="Purchase ID"
          dataIndex="purchaseId"
          key="purchaseId"
          align="center"
        />
        <Table.Column // TODO: Add link to the user modal
          title="User"
          dataIndex="userId"
          key="userId"
          align="center"
          render={(val) => <a>{val}</a>}
        />
        <Table.Column // TODO: Add link to the product modal
          title="Product"
          dataIndex="productId"
          key="productId"
          align="center"
          render={(val) => <a>{val}</a>}
        />
        <Table.Column
          title="Product title"
          dataIndex="productTitle"
          key="productTitle"
          align="center"
        />
        <Table.Column
          title="Quantity"
          dataIndex="quantity"
          key="quantity"
          align="center"
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
export default OrdersPage;
