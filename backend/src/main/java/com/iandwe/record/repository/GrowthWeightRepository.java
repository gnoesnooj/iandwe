package com.iandwe.record.repository;

import com.iandwe.record.domain.GrowthWeight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GrowthWeightRepository extends JpaRepository<GrowthWeight, Long>  {
//    Optional<GrowthWeight> findByGenderAndMonth(int gender, int month);

    @Query("select w from GrowthWeight w " +
            "where w.gender = :gender " +
            "and w.month <= :month " +
            "order by w.month desc " +
            "limit 5")
    List<GrowthWeight> findAllByGenderAndMonth(int gender, int month);
}
