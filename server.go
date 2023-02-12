package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"crypto/rand"
	"encoding/hex"

	"github.com/rs/cors"
)

type credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type response struct {
	Token string `json:"token"`
}

func generateToken(length int) (string, error) {
	bytes := make([]byte, length)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}

	return hex.EncodeToString(bytes), nil
}

func main() {
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var creds credentials
		
		err := json.NewDecoder(r.Body).Decode(&creds)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			fmt.Fprint(w, "Bad request")
			return
		}

		if creds.Username == "admin" && creds.Password == "secret" {
			token, err := generateToken(16)
			if err != nil {
				fmt.Println("error:", err)
				return
			}
			res := response{Token: token}
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			json, err := json.Marshal(res)

			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.Write(json)
		} else {
			w.WriteHeader(http.StatusUnauthorized)
			fmt.Fprint(w, "Unauthorized")
		}
	})

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
	})

	log.Fatal(http.ListenAndServe(":8081", c.Handler(handler)))
}