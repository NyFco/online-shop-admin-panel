import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';

import EditCategoryModal from './EditCategoryModal';

interface DataType {
  id: number;
  name: string;
  description?: string | null;
}

const data: DataType[] = [
  {
    id: 0,
    name: 'sports',
    description: '',
  },
  {
    id: 1,
    name: 'electronics',
    description: 'All electronics products',
  },
  {
    id: 2,
    name: 'clothing',
    description: '',
  },
];

const CategoriesPage = () => {
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false);
  const [editItemIdx, setEditItemIdx] = useState<number>(0);

  return (
    <>
      <EditCategoryModal
        open={editModalIsVisible}
        setOpen={setEditModalIsVisible}
        categoryData={data[editItemIdx]}
      />
      <Table dataSource={data}>
        <Table.Column
          title="ID"
          dataIndex="id"
          key="id"
          align="center"
          width={100}
        />
        <Table.Column
          title="Name"
          dataIndex="name"
          key="name"
          align="center"
          width={250}
        />
        <Table.Column
          title="Description"
          dataIndex="description"
          key="description"
          align="center"
          ellipsis
          render={(val) => val || '-'}
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
export default CategoriesPage;
