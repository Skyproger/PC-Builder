type Props = {
    message:string,
}

export function ErrorMessage ({message} :Props ){
    return (
        <p className="text-sm text-desctuctive" role="alert">{message}</p>
    )
}