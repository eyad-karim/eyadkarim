// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { users } from "@/users";

export default function handler(req, res) {
    if (req.method == "GET") {
        res.status(200).json(users)
    } else if (req.method == "POST") {
        const user = req.body.user
        const msg = req.body.msg
        const newUser = {
            id: Date.now(),
            user: user,
            msg: msg,
        }
        users.push(newUser)
        res.status(201).json(newUser)
    }
    
}