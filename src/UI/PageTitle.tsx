type Props = {
    title: string
}

export const PageTitle = ({title}: Props) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
 }