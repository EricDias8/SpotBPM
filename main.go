package main

import (
	"fmt"
	"net/http"
	"log"
)

func main() {
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)

	http.HandleFunc("/upload", fileUploadHandler)

	fmt.Println("Listening on http://localhost:8080/")
	log.Fatal(http.ListenAndServe(":8080", nil))

}

func fileUploadHandler(w http.ResponseWriter, r *http.Request) {
	// Handle file upload
}

