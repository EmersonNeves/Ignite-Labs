export interface IGetLessonBySlugResponse {
    lesson: {
        title: string,
        videoId: string,
        description: string
        teacher: {
            name: string,
            avatarURL: string,
            bio: string
        }
    },
}