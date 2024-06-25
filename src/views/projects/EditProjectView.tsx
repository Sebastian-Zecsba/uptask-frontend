import { Navigate, useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getProjectById } from "@/api/ProjectApi"
import EditProjetForm from "@/components/EditProjetForm"

const EditProjectView = () => {

    const params = useParams()
    const projectId = params.projectId!

    const {data, isLoading, isError} = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })

    if(isLoading) return 'Cargnando...'
    if(isError) return <Navigate to="/404"/>
    if(data) return <EditProjetForm data={data} projectId={projectId}/>
}

export default EditProjectView