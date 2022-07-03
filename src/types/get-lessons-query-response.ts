export interface GetLessonsQueryResponse {
    lessons: {
        id:string,
        slug: string,
        title: string,
        availableAt: string,
        lessonType: 'live' | 'class'
    }[]
}