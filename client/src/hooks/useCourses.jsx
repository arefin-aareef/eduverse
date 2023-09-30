import { useEffect, useState } from "react"

const useCourses = () => {
    const [course, setCourse] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => {
            setCourse(data)
            setLoading(false)
        })
    },[])
    return [course, loading]
}
export default useCourses;