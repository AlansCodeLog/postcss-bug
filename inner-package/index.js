import postcssrc from "postcss-load-config"
import config from "lilconfig"
import path from "path"
import url from "url"

const __dirname = path.resolve(url.fileURLToPath(new URL('.', import.meta.url)))

console.log({__dirname})
const main = async () => {
	const opts = {
		searchPlaces: [__dirname, "postcss.config.cjs"],
		// stopDir: __dirname
	}
	await postcssrc({ }, __dirname, opts)
	.catch(postcssErr => {
		console.log({postcssErr})
	})
	const lilconfigRes = await config.lilconfig('postcss', opts)
		.search(__dirname)
		.catch(lilconfigErr => {
			console.log({lilconfigErr})

		})
	 console.log({lilconfigRes})

}

main()
