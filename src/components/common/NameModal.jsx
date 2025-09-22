import { useState } from "react";
import { Button, Text, TextField } from "@radix-ui/themes";

const NameModal = ({ isOpen, onClose, onSubmit, title, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      setInputValue("");
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_container">
        <div className="modal_header">
          <Text size="5" weight="bold" className="modal_title">
            {title}
          </Text>
        </div>
        
        <div className="modal_body">
          <TextField.Root
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="modal_input"
            autoFocus
          />
        </div>
        
        <div className="modal_footer">
          <Button
            onClick={handleSubmit}
            variant="solid"
            className="modal_submit_button"
            disabled={!inputValue.trim()}
          >
            확인
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="modal_cancel_button"
          >
            취소
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NameModal;
