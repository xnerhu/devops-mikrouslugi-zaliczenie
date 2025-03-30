Link: <https://ug.nersent.com/devops>

## Elementy obowiązkowe (wymagany przynajmniej jeden)

1. Instalacja i konfiguracja Jenkins na serwerze lub lokalnym środowisku – ZROBIONE
   Jenkins instalowany i uruchamiany z użyciem `apt` w GitHub Actions. Konfiguracja obejmuje pobranie pluginów oraz uruchomienie pipeline.

2. Użycie plików Jenkinsfile w repozytorium GitHub do definiowania pipeline – ZROBIONE
   W repozytorium znajduje się plik `Jenkinsfile`, który definiuje wszystkie etapy pipeline.

3. Tworzenie Dockerfile i budowanie obrazów Docker dla aplikacji – ZROBIONE
   Aplikacja posiada poprawnie skonfigurowany `Dockerfile`. Budowanie obrazu następuje w pipeline.

---

## Elementy dodatkowe (liczone kiedy przynajmniej jeden element obowiązkowy występuje)

1. Definiowanie pełnego cyklu życia aplikacji w Jenkinsfile – ZROBIONE
   Pipeline zawiera etapy: instalacja zależności, testy, budowanie obrazu, uruchomienie kontenera, test integracyjny, czyszczenie.

2. Konfiguracja Docker Compose do uruchamiania aplikacji w środowisku wielokontenerowym – ZROBIONE
   Plik `docker-compose.yml` uruchamia aplikację i bazę danych PostgreSQL.

3. Konfiguracja automatycznego wycofania wdrożenia w przypadku niepowodzenia – ZROBIONE  
   Docker image mamy zdeployowany na kubernetes, który już handluje rollback automatycznie.

4. Ustawienie powiadomień (np. email, Slack) dla zdarzeń w pipeline – NIEZROBIONE
   Brak konfiguracji powiadomień w `Jenkinsfile` ani przez webhooki.

5. Automatyczne wersjonowanie aplikacji i zarządzanie wersjami w pipeline – ZROBIONE
   Wersjonowanie realizowane za pomocą `BUILD_NUMBER` w nazwie obrazu Docker.

6. Konfiguracja pipeline do wdrażania aplikacji w różnych środowiskach – NIEZROBIONE
   Brak podziału na środowiska (np. dev/staging/prod).

7. Konfiguracja infrastruktury jako kodu (IaC) przy użyciu Ansible – ZROBIONE
   Definicje kubernetes jako yaml.

8. Implementacja narzędzi do analizy statycznej kodu (np. SonarQube) w pipeline – ZROBIONE
    Testy jednostkowe i pokrycie kodu są generowane w pipeline. Linter za pomocą `eslint` jest uruchamiany w pipeline.

9. Utworzenie własnej aplikacji – ZROBIONE
   Własna aplikacja Node.js z jednym endpointem oraz testami jednostkowymi.
