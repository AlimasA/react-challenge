import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  background: radial-gradient(circle at 50% 50%, #5c4d1e, #715e29, #866f34, #9d8040, #b4924c, #cca459, #e5b666, #ffc973);
}
header {
  font-size: 1.3rem;
}
img {
  width: 100%;
}
ul {
  list-style: none;
}

iframe{
  width: 100%;
  
}

.container {
  max-width: 768px;
  margin: auto;
  padding: 0 20px;
}

header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.card {
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px 0;
  position: relative;
}

.card.reverse {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}

.card h2 {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px 0 40px;
}

.rating li,
.num-display {
  position: relative;
  background: #f4f4f4;
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 19px;
  border: 1px #eee solid;
  transition: 0.3s;
}

.rating li label {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.rating li:hover,
.num-display {
  background: #ff6a95;
  color: #fff;
}

[type='radio'] {
  opacity: 0;
}

[type='radio']:checked ~ label {
  background: #ff6a95;
  color: #fff;
}

.input-group {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
}

input {
  flex-grow: 2;
  border: none;
  font-size: 16px;
}

input:focus {
  outline: none;
}

.feedback-stats {
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.num-display {
  position: absolute;
  top: -10px;
  left: -10px;
}

.close,
.edit {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
}

.edit {
  right: 40px;
}

.btn {
  color: #fff;
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 100px;
  height: 40px;
  cursor: pointer;
}

.btn-primary {
  background-color: #202142;
}

.btn-secondary {
  background: #ff6a95;
}

.btn:hover {
  transform: scale(0.98);
  opacity: 0.9;
}

.btn:disabled {
  background-color: #cccccc;
  color: #333;
  cursor: auto;
}

.btn:disabled:hover {
  transform: scale(1);
  opacity: 1;
}

.message {
  padding-top: 10px;
  text-align: center;
  color: rebeccapurple;
}

.about-link {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  cursor: pointer;
}

.about-link a {
  color: #fff;
}

.about-link a:hover {
  color: #ff6a95;
}

.about h1 {
  margin-bottom: 20px;
}

.about p {
  margin: 10px 0;
}

@media (max-width: 600px) {
  .rating li {
    margin: 10px 3px;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0 40px;
  }

  .input-group input {
    width: 80%;
  }
}
`;

export default GlobalStyles;
