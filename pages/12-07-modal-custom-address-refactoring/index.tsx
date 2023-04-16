import { useState } from "react";
import { Modal } from "antd";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import DaumPostcodeEmbed from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log("실행되었습니다.");
    console.log(address);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>
      <Modal
        title="모달 제목"
        open={isModalOpen}
        onOk={onToggleModal}
        onCancel={onToggleModal}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>

      {isModalOpen && (
        <Modal
          title="모달 제목"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustomPage;
