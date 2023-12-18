import { Heading } from "@/styles/heading";

export const Form = ({ buttonText }: { buttonText: string }) => {
    return <form>
        <Heading fontSize={30} padding="10px" align="left">Form Title</Heading>
        <input />
        <button>{buttonText}</button>
    </form>
}
