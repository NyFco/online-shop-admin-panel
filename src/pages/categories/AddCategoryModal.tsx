import { Form, Input, Modal } from 'antd';

const AddCategoryModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (p: boolean) => void;
}) => {
  const [addForm] = Form.useForm();

  return (
    <Modal open={open} onCancel={() => setOpen(false)} closeIcon={false}>
      <Form
        className="modal-form"
        form={addForm}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17, offset: 1 }}
      >
        <Form.Item name="id" label="ID" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddCategoryModal;
