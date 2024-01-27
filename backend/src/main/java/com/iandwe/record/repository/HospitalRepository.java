package com.iandwe.record.repository;

import com.iandwe.record.domain.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HospitalRepository extends JpaRepository<Hospital, Long> {

    List<Hospital> findAllByTargetNum(Long num);

    Hospital findByNum(Long num);
}
