import Button from "@/components/atoms/Button";
import Modal, { ModalProps } from "@/components/atoms/Modal";
import Typography from "@/components/atoms/Typography";
import cn from "@/utils/cn";

interface ConfirmModalProps extends ModalProps {
  type: "danger" | "action";
  title: string;
  content: string;
  buttonLabel: string;
  onClose: () => void;
  onSuccess?: () => void;
}

const ConfirmModal = ({
  type,
  title,
  content,
  buttonLabel,
  onClose,
  onSuccess,
  ...props
}: ConfirmModalProps) => {
  const danger = type === "danger";

  return (
    <Modal {...props} onClose={onClose} className="w-1/5 min-w-[300px]">
      <Modal.Header onClose={onClose}>
        <div className="flex items-center gap-1">
          {danger && (
            <i className="bi bi-exclamation-triangle text-xl text-red-500" />
          )}
          <Typography.SubTitle1
            className={cn(
              "font-bold",
              danger ? "text-red-500" : "text-mos-main"
            )}
          >
            {title}
          </Typography.SubTitle1>
        </div>
      </Modal.Header>
      <Modal.Content>
        <Typography.P3>{content}</Typography.P3>
      </Modal.Content>
      <Modal.Footer>
        <Button.Default onClick={onClose} color="Gray">
          취소
        </Button.Default>
        <Button.Default
          onClick={onSuccess}
          color={danger ? "Red" : "Main"}
          active
        >
          {buttonLabel}
        </Button.Default>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
