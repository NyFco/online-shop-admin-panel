import { useEffect } from 'react';
import { Form, Input, Modal } from 'antd';

const EditProductModal = ({
  open,
  setOpen,
  item,
}: {
  open: boolean;
  setOpen: (p: boolean) => void;
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    img: string;
  };
}) => {
  const [editForm] = Form.useForm();

  useEffect(() => {
    editForm.setFieldsValue({ ...item });
  }, [editForm, item]);

  return (
    <Modal open={open} onCancel={() => setOpen(false)} closeIcon={false}>
      <Form
        className="modal-form"
        form={editForm}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17, offset: 1 }}
      >
        <Form.Item name="id" label="ID" rules={[{ required: true }]}>
          <Input type="number" disabled />
        </Form.Item>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditProductModal;
