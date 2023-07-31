import { useEffect } from 'react';
import { Form, Input, Modal } from 'antd';

const EditCategoryModal = ({
  open,
  setOpen,
  categoryData,
}: {
  open: boolean;
  setOpen: (p: boolean) => void;
  categoryData: {
    id: number;
    name: string;
    description?: string | null;
  };
}) => {
  const [editForm] = Form.useForm();

  useEffect(() => {
    editForm.setFieldsValue({ ...categoryData });
  }, [editForm, categoryData]);

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
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={5} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditCategoryModal;
