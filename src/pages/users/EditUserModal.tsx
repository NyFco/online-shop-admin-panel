import { useEffect } from 'react';
import { Form, Input, Modal } from 'antd';

const EditUserModal = ({
  open,
  setOpen,
  userData,
}: {
  open: boolean;
  setOpen: (p: boolean) => void;
  userData: {
    id: number;
    name: string;
    email: string;
    joinDate: string;
  };
}) => {
  const [editForm] = Form.useForm();

  useEffect(() => {
    editForm.setFieldsValue({ ...userData });
  }, [editForm, userData]);

  return (
    <Modal open={open} onCancel={() => setOpen(false)} closeIcon={false}>
      <Form
        className="modal-form"
        form={editForm}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17, offset: 1 }}
      >
        <Form.Item name="id" label="ID">
          <Input type="number" disabled />
        </Form.Item>
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="joinDate" label="Join date">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditUserModal;
