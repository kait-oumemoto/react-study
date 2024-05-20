# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

React を使用して犬の画像ギャラリーアプリを作成してください。

api key
live_CAYtJ89PvWAC4RfRTjCTNKyNq9j4XrwmbmFgJbaqBydfBHc9Kx2OTK1EWKxBuwSw

api doc
https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z#intro

機能要件
・犬の画像一覧画面
　・アプリがロードされた際に、The Dog API から犬の画像のリストを取得して表示します。
　・表示される画像リストは、犬の種類名を含む必要があります。
　・犬の種類名の下にお気に入り登録ボタンを配置してください。
　・各画像を押下すると詳細ページへ遷移される必要があります。

・犬の画像詳細画面
　・一覧画面から選択された犬の画像と詳細情報を表示します。
　・詳細情報には、犬の種類、生息地、サイズなどが含まれます。
　・「別の画像を見る」ボタンを設置し、同じ種類の犬の別の画像を API から取得して表示します。
　・お気に入り登録ボタンを配置してください。

・グローバルメニュー
　・アプリのどの画面からでも、一覧画面とお気に入り画像画面に遷移できるリンクが含まれます。

・お気に入り画像画面
　・ユーザーが「お気に入り」とマークした画像の一覧を表示します。
　・お気に入りから画像を削除することができます。

ルール
・各画面要素は適切な範囲でコンポーネントに切り出してください。
・useContext に情報を保存し、画面遷移を行なってもデータが消えずに表示されるようにしてください。これには、お気に入り情報や API から取得したデータの管理を含みます。
・お気に入り情報は localStorage に保存してください。
