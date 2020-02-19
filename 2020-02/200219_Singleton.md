# Singleton

### 전체 프로그램에서 단 하나의 객체만 만들어지도록 보장하는 코딩 기법


```java

public class ClassName {
  private ClassName() {}
  
  private static ClassName singleton = new ClassName();
  
  public static ClassName getInstance(){
    return singleton;
  }
}

```
