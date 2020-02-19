# Singleton

### 전체 프로그램에서 단 하나의 객체만 만들어지도록 보장하는 코딩 기법


```java

public class Singleton {
    private Singleton() {} // 디폴트 생성자 호출 차단, 외부에서 생성자 호출을 통한 객체생성을 차단.

    private static Singleton singleton = new Singleton();

    public static Singleton getInstance() {
        return singleton;
    }
}

```
