export type RequestAction = {
	type: "POST" | "GET" | "DELETE" | "PUT"
	data?: any,
	params?: any,
}
