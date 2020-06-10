import React from 'react';
import { InputText } from "../_library/Inputs";
import { Row } from "../_library/Containers";

export const BusSectionForm = () => {
    return (
        <Row>
            <InputText id={"busOperator"} label={"Bus Operator"} />
            <InputText id={"busTicketPriceFrom"} label={"[ikonka]"} />
            <InputText id={"busTicketPriceTo"} label={"[ikonka]"} />
        </Row>
    )
}