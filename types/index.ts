import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit" | "reset";
    textStyles?: string;
    rightIcon?: string;
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}