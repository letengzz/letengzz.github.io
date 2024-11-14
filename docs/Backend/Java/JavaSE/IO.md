# File类&IO流

## File类

> 创建 File类实例

- File(String pathname)
- File(String parent, String child)
- File(File parent, String child)

> 路径

相对路径：相较于某个路径下，指明的路径
绝对路径：包含盘符在内的文件或文件目录路径
说明：

- IDEA中
  如果开发中使用JUnit中的单元测试方法测试，相对路径即为当前Module下。
    	如果开发中使用main()方法测试，相对路径即为当前的Project下。
- Eclipse中
  不管使用单元测试方法还是main()方法测试，相对路径都是当前的Project下。

路径分隔符：

- windows：\
- unix：/

> File常用方法

public String getAbsolutePath():获取绝对路径
public String getPath():获取路径
public String getName():获取文件名
public String getParent():获取上层文件目录路径。若无，返回null
public long length():获取文件长度（即：字节数）。不能获取目录的长度
public long lastModified():获取最后一次的修改时间，毫秒值 
如下的两个方法适用于文件目录
public String[] list():获取指定目录下的所有文件或者文件目录的名称数组。
public File[] listFiles():获取指定目录下的所有文件或者文件目录的File数据
public boolean renameTo(File dest):把文件重命名为指定的文件路径
比如：file1.renameTo(file2)为例：要保证返回true，需要file1在硬盘中是存在的，且file2在硬盘中是不存在的。
判断功能的方法：
public boolean isDirectory():判断是否为文件目录
public boolean isFile():判断是否为文件
public boolean exists():判断是否存在
public boolean canRead():判断是否可读
public boolean canWrite():判断是否可写
public boolean isHidden():判断是否隐藏
public boolean creatNewFile():创建文件。若文件存在，则不创建，返回false
public boolean mkdir():创建文件目录。如果此文件目录存在或者此文件目录的上层目录不存在，就不创建了。
public boolean mkdirs():创建文件目录。如果上层文件目录不存在，一并创建。
public boolean delete():删除文件或者文件目录(只能删除空目录)。
注意：

- 如果创建文件或者文件目录时没有写盘符路径，那么，默认在项目路径下。
- java中的删除不走回收站。
- 要删除一个文件目录，请注意该文件目录内不能包含文件或者文件目录

## IO流

```latex
*  抽象基类        节点流（或文件流） 缓冲流（处理流的一种）
*  InputStream    FileInputStream   BufferedInputStream(read(byte[] buffer))
*  OutputStream   FileOutputStream  BufferedOutputStream(write(byte[] buffer,0,len))
*  Reader         FileReader        BufferedReader(read(char[] cbuf) / readLine() )
*  Writer         FileWriter        BufferedWriter(write(char[] cbuf,0,len)/flush())
```

> 输入输出标准化过程

> 输入过程

①创建File类的对象，指明读取的数据的来源。（要求此文件一定要存在）
②创建相应的输入流，将File类的对象作为参数，传入流的构造器中
③具体的读入过程
创建相应的byte[] 或 char[]。
④关闭流资源
说明：处理异常仍然应该使用try-catch-finally

> 输出过程

①创建File类的对象，指明写出的数据的位置。（不要求此文件一定要存在）
②创建相应的输入流，将File类的对象作为参数，传入流的构造器中
③具体的写出过程
write(char[] cbuf/byte[] buffer,0,len)
④关闭流资源
说明：处理异常仍然应该使用try-catch-finally

### 字符流FileReader&FileWriter

#### FileReader的使用

```java
将FileReaderWriter下的hello.txt文件内容读入到程序中，并输出到控制台。
说明点：
    *read()的理解：返回读入的一个字符。如果达到文件末尾，返回-1
    *异常的处理：为了保证流资源一定可以执行关闭操作。需要使用try-catch-finally处理
    *读入的文件一定要存在，否则就会报FileNotFoundException。
@Test
public void testFileReader1() throws IOException {
    //1.File类的实例化
    File file = new File("hello.txt");
    //2.FileReader流的实例化
    FileReader fr= null;
    fr= new FileReader(file);
    //3.读入的操作
    //read(char[] cbuf):返回每次读入cbuf数组中的字符的个数。如果达到文件末尾，返回-1.
    char[] cbuf = new char[5];
    int len;
    while((len = fr.read(cbuf))!= -1){
        //方式一
        //for (int i = 0; i < len; i++) {
        //    System.out.print(cbuf[i]);
        //}
        //方式二
        String str = new String(cbuf,0,len);
        System.out.print(str);
    }
    //4.资源的关闭
    fr.close();
}
从内存中写出数据到硬盘的文件
说明：
1.输出操作，对应的File可以不存在。
File对应的硬盘中的文件如果不存在，在输出的过程中，会自动创建文件
File对应的硬盘中的文件如果存在：
    如果流使用的构造器是：FileWriter(file，false)/FileWriter(file):对原有文件的覆盖
    如果流使用的构造器是：FileWriter(file,true):不会对原有文件覆盖，而是在原有文件基础上追加内容
```

#### FileWriter的使用

```java
@Test
public void testFileWriter() throws IOException{
    //1.提供File类的对象，指明写出到的文件
    File file = new File("hello.txt");
    //2.提供FileWriter的对象，用于数据的写出
    FileWriter fw = new FileWriter(file);
    //3.写出的操作
    fw.write("I have a stream!\n");
    fw.write("you need to have a dream!");
    //4.流资源的关闭
    fw.close();
}
```

### 字节流FileInputStream&FileOutputStream

```java
结论：*对于文本文件（.txt, .java,.cpp）：使用字符流处理
  *对于非文本文件（.jpg,.map,.avi,.doc,.ppt,...）：使用字节流处理
public class FileIOTest {
    @Test
    public void testCopy(){
        long start = System.currentTimeMillis();
        copyFile("D:\\Desktop\\JAVA 8实战.pdf","D:\\Desktop\\JAVA 8 1实战.pdf");
        long end = System.currentTimeMillis();
        System.out.println(end - start);//640
    }
    public void copyFile(String srcPath,String destPath){
        FileInputStream fi = null;
        FileOutputStream fo = null;
        int len;
        byte[] bytes = new byte[1024];
        try{
            fi = new FileInputStream(srcPath);
            fo = new FileOutputStream(destPath);
            while((len = fi.read(bytes))!=-1){//读入
                fo.write(bytes,0,len);//写出
            }
        }catch(IOException e){
            e.printStackTrace();
        }finally{
            ... //流关闭
        }
    }
}
```

### 缓冲字符流BufferedReader&BufferedWriter

```java
public class BufferedReaderWriterTest {
    @Test
    public void testBufferedReaderWriter(){
        long start = System.currentTimeMillis();
        copyFile("hello.txt","hlo.txt");
        long end = System.currentTimeMillis();
        System.out.println(end - start);//16
    }
    public void copyFile(String srcPath,String destPath){
        BufferedReader br = null;
        BufferedWriter bw = null;
        int len;
        char[] cbuf = new char[1024];
        try{
            br = new BufferedReader(new FileReader(new  File(srcPath)));//缩写
            bw = new BufferedWriter(new FileWriter(new File(destPath)));
            while((len = br.read(cbuf))!=-1){
                bw.write(cbuf,0,len);
            }
        }catch(IOException e){
            e.printStackTrace();
        }finally{
           ...//流关闭
        }
    }
}
```

### 缓冲字节流BufferedInputStream&BufferedOutputStream

```java
public class BufferedIOStreamTest {
    @Test
    public void testBufferedStream() {
        long start = System.currentTimeMillis();
        copyFile("D:\\Desktop\\JAVA 8实战.pdf","D:\\Desktop\\JAVA 8 2实战.pdf");
        long end = System.currentTimeMillis();
        System.out.println(end - start);//140
    }
    public void copyFile(String srcPath,String destPath){
        FileInputStream fis = null;
        FileOutputStream fos = null;
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;
        int len;
        byte[] bytes = new byte[1024];
        try{
            fis = new FileInputStream(srcPath);
            fos = new FileOutputStream(destPath);
            bis = new BufferedInputStream(fis);
            bos = new BufferedOutputStream(fos);
            while((len = bis.read(bytes))!=-1){
                bos.write(bytes,0,len);
                //bos.flush();//刷新缓冲区
            }
        }catch(IOException e){
            e.printStackTrace();
        }finally{
            ...//流关闭
        }
    }
}
```

6.注意点：
①如果不声明全局常量serialVersionUID,系统会自动声明生成一个针对于当前类的serialVersionUID。
如果修改此类的话，会导致serialVersionUID变化，进而导致反序列化时，出现InvalidClassException异常。
②类中的属性如果声明为transient或static,则不会实现序列化。

