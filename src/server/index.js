import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import React from 'react'
import serialize from 'serialize-javascript'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('*', (req, res, next) => {
	const name = "Dave"
	const markup = renderToString(
		<App data={name} />
	)

	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>RR SSR</title>
				<script src="/bundle.js" defer></script>
				<script>window.__INITIAL_DATA__=${serialize(name)}</script>
			</head>
			<body>
				<div id="app">${markup}</app>
			</body>
		</html>
	`)
})

app.listen(3000, () => {
	console.log("port 3000")
})