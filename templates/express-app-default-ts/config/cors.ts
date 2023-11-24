import cors from "cors";

const VoidCors = () => {
    return cors({ credentials: true })
}

export default VoidCors;