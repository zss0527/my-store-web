ng中的module可以把一系列相关的components组合到一块形成一个整体，相当于在component上层多了一层结构
一个component只能在一个module的declarations数组中声明
module中的组件可以通过2种方式添加到项目中：
    2. 在本module中export出去，再在根模块的imports数组中添加该module；
    3. 通过路由模块导入；
