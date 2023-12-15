export default function Input({textarea, label, ...props}) {
    return (
          <>
    <p>{label} {textarea ? <textarea {...props}/> : <input {...props}/>}</p>
    </>
    )

}