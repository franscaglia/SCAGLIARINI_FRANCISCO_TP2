export const config = {
    PORT: process.env.PORT ?? 3003,
    HOST: process.env.HOST ?? "127.0.0.1",
    DB_PATH: "./src/db/db.json",
    CSV: "./src/db/data.csv",
    CSV_PATH: "https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv"
}