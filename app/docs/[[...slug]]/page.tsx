const page = async ({params}:{params: Promise <{slug: string[]}>}) => {
    const {slug} = await params;
    console.log(slug);

    if(slug?.length === 1){
        return (
            <div>
                <h1>just one slug ({slug[0]})</h1>
            </div>
        )
    }

    if(slug?.length === 2){
        return (
            <div>
                <h1>Docs - {slug[0]} - {slug[1]}</h1>
            </div>
        )
    }else{
        return (
            <>common content</>
        )
    }
}

export default page



/**
 * Docs
 * Feature-1
 *  Concept-1
 *  Concept-2
 *  Concept-3
 * Feature-2
 *  Concept-1
 *  Concept-2
 * Feature-3
 * Feature-4
 *  Concept-1
 *  Concept-2
 */