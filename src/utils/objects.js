export function MovieInfo(data) {
    this.id = data?._id
    this.url = data?.url
    this.description = data?.description
    this.name = data?.name
}
