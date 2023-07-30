import { useEffect } from 'react';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';

const EditOrderModal = ({
  open,
  setOpen,
  orderData,
}: {
  open: boolean;
  setOpen: (p: boolean) => void;
  orderData: {
    purchaseId: number;
    userId: number;
    productId: number;
    productTitle: string;
    quantity: number;
    price: number;
  };
}) => {
  const [editForm] = Form.useForm();

  useEffect(() => {
    editForm.setFieldsValue({
      purchaseId: orderData.purchaseId || undefined,
      userId: orderData.userId || '',
      productId: orderData.productId || '',
      productTitle: orderData.productTitle || '',
      quantity: orderData.quantity || null,
      price: orderData.price || '',
    });
  }, [editForm, orderData]);

  return (
    <Modal open={open} onCancel={() => setOpen(false)} closeIcon={false}>
      <Form
        className="modal-form"
        form={editForm}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17, offset: 1 }}
      >
        <Form.Item name="purchaseId" label="Purchase ID">
          <Input type="number" disabled />
        </Form.Item>
        <Form.Item name="userId" label="User">
          <Button>
            <UserOutlined />
            {orderData?.userId}
          </Button>
        </Form.Item>
        <Form.Item name="productId" label="Product">
          <Button>
            <ShoppingCartOutlined />
            {orderData?.productTitle}
          </Button>
        </Form.Item>
        <Form.Item name="quantity" label="Quantity">
          <Input type="number" disabled />
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input type="number" disabled />
        </Form.Item>
        <Form.Item name="respond" label="Respond">
          <Input.TextArea rows={5} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditOrderModal;
