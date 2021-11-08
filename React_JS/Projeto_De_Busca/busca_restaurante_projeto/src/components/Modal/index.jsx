import React, { useEffect } from "react";
import PortalModal from "./Portal";
import * as Style from "./Portal/styles"

const Modal = ({children, open, onClose}) => {
    useEffect(() => {
        function onEsc(e) {
            if(e.keyCode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc)
        }
    },[onClose])

    if(!open) return null;
    function onOverlayClick() {
        onClose();
    }

    function onDialogClick(e){
        e.stopPropagation()
    }

    return (
        <PortalModal>
            <Style.Overlay onClick ={onOverlayClick}>
                <Style.Dialog onClick={onDialogClick}>
                    {children}
                </Style.Dialog>
            </Style.Overlay>
        </PortalModal>
    )
}

export default Modal