package main

import (
	"fmt"
	"net/http"
)

const (
	username = "admin"
	password = "secret"
)

func main() {
	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()
		user := r.Form.Get("username")
		pass := r.Form.Get("password")
		if user != username || pass != password {
			http.Error(w, "Invalid username or password", http.StatusUnauthorized)
			return
		}
		fmt.Fprintln(w, "Welcome, valid user!")
	})
	http.ListenAndServe(":8080", nil)
}
