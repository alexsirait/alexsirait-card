import React, { FC } from "react";
import { Box, Text } from "ink";
import useSWR from "swr";
import got from "got";
import Spinner from "ink-spinner";

const TodoToday = () => {
	const { data: todoss, isValidating: validTodo } = useSWR<{
		todo: string;
	}>("random", async (endpoint: string) => {
		return await got(`https://dummyjson.com/todos/${endpoint}`).json();
	});

	return (
		<Box marginTop={1} flexDirection="column">
			{validTodo && (
				<Text>
					<Spinner type="dots" /> Fetching random todos
				</Text>
			)}
			{todoss && (
				<>
					<Box>
						<Text wrap="truncate-middle">📝 "{todoss.todo}"</Text>
					</Box>
				</>
			)}
		</Box>
	);
};

const QuoteToday = () => {
	const { data: quotess, isValidating: validQuote } = useSWR<{
		author: string;
		quote: string;
	}>("quotes/random", async (endpoint: string) => {
		return await got(`https://dummyjson.com/${endpoint}`).json();
	});

	return (
		<Box marginTop={1} flexDirection="column">
			{validQuote && (
				<Text>
					<Spinner type="dots" /> Fetching random quotes
				</Text>
			)}
			{quotess && (
				<>
					<Box>
						<Text wrap="truncate-middle">💬 "{quotess.quote}"</Text>
					</Box>
					<Box>
						<Text dimColor>🧠 {quotess.author}</Text>
					</Box>
				</>
			)}
		</Box>
	);
};

const App: FC<{ name?: string }> = () => (
	<Box
		paddingX={4}
		paddingY={2}
		borderStyle="round"
		flexDirection="column"
		width={70}
	>
		<Text bold>alexsirait 👋</Text>
		<Box>
			<Text dimColor>{">"}</Text>
			<Box marginLeft={1}>
				<Text>Software Developer </Text>
				<Text dimColor>@</Text>
				<Text> Cladtek</Text>
			</Box>
		</Box>
		<Box flexDirection="row" marginTop={1}>
			<Box>
				<Text>🧑</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text>Alekk </Text>
				<Text dimColor>-</Text>
				<Text> Alex Sirait</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>🌐</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text underline dimColor>
					https://
				</Text>
				<Text underline>alexsiraitnotes.vercel.app</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>📬</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text dimColor>mailto:</Text>
				<Text>alexsirait1001@gmail.com</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>📱</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text dimColor>tel:</Text>
				<Text>+6281363735891</Text>
			</Box>
		</Box>
		<Box marginTop={1}>
			<Text>----------------------------------</Text>
		</Box>
		<Text>Random Quote and Todo for Today 🖕</Text>
		<Box>
			<Text>----------------------------------</Text>
		</Box>
		<QuoteToday />
		<TodoToday />
	</Box>
);

module.exports = App;
export default App;
