import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useState } from "react";
import CustomButton from "../../components/CustomButton"
import CustomModal from "../../components/CustomModal"
import Leads from "./components/Leads"
import AddNewPipeLine from "./components/AddNewPipeLine";

const PipeLines = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>

      <DndProvider backend={HTML5Backend}>
        <div className="flex gap-3">
          <Leads />
          <CustomButton onClick={openModal} variant="normal" size="md" className="h-12 border border-defaultBlue">
            + Add New Pipeline
          </CustomButton>
        </div>
      </DndProvider>





      <CustomModal
        title='New Pipeline'
        isOpen={modalIsOpen}
        onClose={closeModal}
      >
        <AddNewPipeLine handleVisible={closeModal} />
      </CustomModal>
    </>
  )
}

export default PipeLines