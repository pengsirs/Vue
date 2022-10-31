<template>
  <div class="login">
    <div class="max">Login</div>
    <div class="login-box">
      <el-form :model="ruleForm" :rules="rules"
            ref="ruleForm" style="width: 100%">
        <el-form-item
          prop="name">
          <el-input
            v-model="ruleForm.name"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="password">
          <el-input
            v-model="ruleForm.password"
            prefix-icon="el-icon-warning"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="btnSubmit('ruleForm')"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ]
        }
    };
    
  },

  methods: {
    btnSubmit(name) {
      console.log(name)
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "恭喜你，登录成功",
            type: "success",
          });
          this.$router.push("/");
        } else {
          this.$message({
            showClose: true,
            message: "警告哦，登录失败",
            type: "warning",
          });
          return false;
        }
      });
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.login {
  width: 100%;
  height: 100vh;
  background: url(../assets/164544xnN69.jpeg) no-repeat fixed;
  background-size: 100% 100%;
}
.login-box {
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -125px 0 0 -190px;
  color: aliceblue;
  display: flex;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  opacity: 0.9;
  box-shadow: rgb(221, 221, 221) 1px 1px 5px;
}
.max {
  font-size: 80px;
  font-weight: 900;
  color: #ffffff;
  text-shadow: 0 0 10px #ffffff;
}
.title {
  color: #fff;
  text-align: left;
  margin: 10px;
}
</style>
