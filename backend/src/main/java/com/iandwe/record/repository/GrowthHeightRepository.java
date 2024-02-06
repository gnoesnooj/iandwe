package com.iandwe.record.repository;

import com.iandwe.record.domain.GrowthHeight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GrowthHeightRepository extends JpaRepository<GrowthHeight, Long> {

//    Optional<GrowthHeight> findByGenderAndMonth(int gender, int month);

    @Query("select h from GrowthHeight h " +
            "where h.gender = :gender " +
            "and h.month <= :month " +
            "order by h.month desc " +
            "limit 5")
    List<GrowthHeight> findAllByGenderAndMonth(int gender, int month);
}
