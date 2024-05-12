import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick: () => void;
    buttonText?: string;
    image?: string;
    buttonIcon?: string;
}

export default function MeetingModal({
    isOpen,
    onClose,
    title,
    className,
    children,
    handleClick,
    buttonText,
    image,
    buttonIcon,
}: MeetingModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
                <div className="flex flex-col gap-6">
                    {image && (
                        <div className="flex justify-center">
                            <Image src={image} alt={title} width={72} height={72} />
                        </div>
                    )}
                    <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>{title}</h1>
                    {children}
                    <Button className="bg-blue-1 hover:bg-blue-1/80" onClick={handleClick}>
                        {buttonIcon && <Image src={buttonIcon} alt="button icon" width={13} height={13} />} &nbsp;
                        {buttonText || "Schedule Meeting"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
