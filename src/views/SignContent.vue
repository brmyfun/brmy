<template>
  <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <div class="sign" v-bind:class="{ 'active-panel': isSignUp }">
        <div class="form sign-in">
          <div class="form-panel">
            <div class="form-header">
              <h1>登录</h1>
            </div>
            <div class="form-content">
              <form>
                <div class="form-group form-margin">
                  <label for="sign-in-account">用户名/邮箱</label>
                  <input
                    type="text"
                    id="sign-in-account"
                    name="sign-in-account"
                    required="required"
                    v-model="signInAccount"
                  />
                </div>
                <div class="form-group form-margin">
                  <label for="sign-in-pwd">密码</label>
                  <input
                    type="password"
                    id="sign-in-pwd"
                    name="sign-in-pwd"
                    required="required"
                    v-model="signInPwd"
                    @keyup.enter="signIn"
                  />
                </div>
                <div class="form-group form-margin">
                  <label class="form-remember">
                    <input type="checkbox" />记住密码
                  </label>
                  <a class="form-a" href="#">忘记密码？</a>
                </div>
                <div class="form-group">
                  <button type="submit" @click="signIn">登录</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="sub-sign">
          <div class="img">
            <div class="description description-sign-up">
              <h2>没有账号？</h2>
              <p>若还没注册，点击下方按钮注册账号</p>
            </div>
            <div class="description description-sign-in">
              <h2>已有账号？</h2>
              <p>若已有账号，直接点击下方按钮登录</p>
            </div>
            <div class="switch-btn" @click="switchPannel">
              <span class="description-sign-up">注册账号</span>
              <span class="description-sign-in">登录账号</span>
            </div>
          </div>

          <div class="form sign-up">
            <div class="form-panel">
              <div class="form-header">
                <h1>注册</h1>
              </div>
              <div class="form-content">
                <form>
                  <div class="form-group form-margin">
                    <label for="sign-up-account">注册邮箱</label>
                    <input
                      type="text"
                      id="sign-up-account"
                      name="sign-up-account"
                      required="required"
                    />
                  </div>
                  <div class="form-group form-margin">
                    <label for="sign-up-pwd">设置密码</label>
                    <input
                      type="password"
                      id="sign-up-pwd"
                      name="sign-up-pwd"
                      required="required"
                    />
                  </div>

                  <div class="form-group">
                    <label for="digits">验证码</label>
                  </div>
                  <div class="form-group form-margin form-digits">
                    <input
                      type="text"
                      id="digits"
                      name="digits"
                      required="required"
                    />
                    <button>获取验证码</button>
                  </div>
                  <div class="form-group">
                    <button style="margin-top: 10px" type="submit">注册</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
export default {
  name: "SignContent",
  data() {
    return {
      isSignUp: false,
      signInAccount: "",
      signInPwd: "",
    };
  },
  methods: {
    switchPannel() {
      this.isSignUp = !this.isSignUp;
    },
    signIn() {
      // 需要做登录请求,成功了就存储token,同时将token传到主页
      if (this.signInAccount !== "" && this.signInPwd !== "") {
      }
    },
  },
  mounted() {
    this.isSignUp = this.$route.query.signUp;
  },
};
</script>
<style scoped>
.sign {
  overflow: hidden;
  position: relative;
  margin: 100px auto;
  width: 900px;
  height: 550px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
}

.sign.active-panel .sub-sign {
  -webkit-transform: translate3d(-620px, 0, 0);
  transform: translate3d(-620px, 0, 0);
}

.sign.active-panel .img:before {
  -webkit-transform: translate3d(620px, 0, 0);
  transform: translate3d(620px, 0, 0);
}

.sign.active-panel .description.description-sign-up {
  -webkit-transform: translateX(520px);
  transform: translateX(520px);
}

.sign.active-panel .description.description-sign-in {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.sign.active-panel .switch-btn span.description-sign-in {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.sign.active-panel .switch-btn span.description-sign-up {
  -webkit-transform: translateY(72px);
  transform: translateY(72px);
}

.sign.active-panel .sign-in {
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transition-duration: 1.2s;
  transition-duration: 1.2s;
  -webkit-transform: translate3d(620px, 0, 0);
  transform: translate3d(620px, 0, 0);
}

.sign.active-panel .sign-up {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.sign-in {
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.sign-up {
  -webkit-transform: translate3d(-900px, 0, 0);
  transform: translate3d(-900px, 0, 0);
}

.sub-sign {
  overflow: hidden;
  position: absolute;
  left: 620px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 280px;
  background: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 280px;
  height: 100%;
  padding-top: 360px;
}

.img:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url("../assets/bg-sign.jpg");
  background-size: cover;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.img:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.description {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.description h2 {
  margin-bottom: 10px;
  font-weight: normal;
}

.description p {
  font-size: 14px;
  line-height: 1.5;
}

.description.description-sign-in {
  -webkit-transform: translateX(-520px);
  transform: translateX(-520px);
}

.switch-btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 100px auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}

.switch-btn:after {
  content: "";
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 4px;
}

.switch-btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-transform 1.2s;
  transition: -webkit-transform 1.2s;
  transition: transform 1.2s, -webkit-transform 1.2s;
}

.switch-btn span.description-sign-in {
  -webkit-transform: translateY(-72px);
  transform: translateY(-72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
  color: #fff;
}

.form {
  position: relative;
  width: 620px;
  height: 100%;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
  padding: 5px 45px 0;
}

.form-panel {
  padding: 60px calc(5% + 60px) 60px 60px;
  box-sizing: border-box;
}

.form-header {
  margin: 0 0 40px;
}

.form-header h1 {
  padding: 4px 0;
  color: #0084ff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.form-margin {
  margin: 0 0 20px;
}

.form-group {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.form-group label {
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.form-group input {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.06);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.8);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}

.form-group input:focus {
  color: rgba(0, 0, 0, 0.8);
}

.form-group button {
  outline: none;
  background: #0084ff;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #ffffff;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
}

.form-group .form-remember {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}

.form-group .form-remember input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin: 0 10px 0 0;
}

.form-group .form-a {
  color: #0084ff;
  font-size: 12px;
  text-decoration: none;
}

.form-digits input {
  width: 60%;
}

.form-digits button {
  width: 30%;
  font-size: 13px;
}
</style>