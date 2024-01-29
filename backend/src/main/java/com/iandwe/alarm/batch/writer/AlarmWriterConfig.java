package com.iandwe.alarm.batch.writer;

import com.iandwe.alarm.service.AlarmService;
import com.iandwe.checker.domain.BabyChecker;
import com.iandwe.checker.domain.MotherChecker;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemWriter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class AlarmWriterConfig {

    private final AlarmService alarmService;

    @StepScope
    @Bean
    public ItemWriter<BabyChecker> babyAlarmWriter() {
        return chunk -> {
            for (BabyChecker babyChecker : chunk.getItems()) {
                try {
                    log.info("BabyAlarmWriter chunk start");
                    alarmService.sendEmailAlarm(babyChecker);
                } catch (Exception e) {
                    log.info("babyAlarmWriter ERROR {} ", e.getMessage());
                }
            }
        };
    }

    // TODO : Member 완료 시 추가 구현
    @StepScope
    @Bean
    public ItemWriter<MotherChecker> motherAlarmWriter() {
        log.info("mother start");
        return chunk -> {
            log.info("mother chunk start");
        };
    }
}
