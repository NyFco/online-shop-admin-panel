import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';

import AddUserModal from './AddUserModal';
import EditUserModal from './editUserModal';

interface DataType {
  id: number;
  name: string;
  email: string;
  joinDate: string;
}

const data: DataType[] = [
  {
    id: 0,
    name: 'Dustin',
    email: 'dustin@local.com',
    joinDate: '1999/05/12',
  },
  {
    id: 1,
    name: 'Jack',
    email: 'jack@local.com',
    joinDate: '2002/11/02',
  },
  {
    id: 2,
    name: 'Sarah',
    email: 'sarah@local.com',
    joinDate: '2000/01/08',
  },
];

const UsersPage = () => {
  const [addModalIsVisible, setAddModalIsVisible] = useState<boolean>(false);
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false);
  const [editItemIdx, setEditItemIdx] = useState<number>(0);

  return (
    <>
      <AddUserModal open={addModalIsVisible} setOpen={setAddModalIsVisible} />
      <EditUserModal
        open={editModalIsVisible}
        setOpen={setEditModalIsVisible}
        userData={data[editItemIdx]}
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
          Add New User
        </Button>
      </div>
      <Table dataSource={data}>
        <Table.Column
          title="ID"
          dataIndex="id"
          key="id"
          align="center"
          width={100}
        />
        <Table.Column title="Name" dataIndex="name" key="name" align="center" />
        <Table.Column
          title="Email"
          dataIndex="email"
          key="email"
          align="center"
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
export default UsersPage;
